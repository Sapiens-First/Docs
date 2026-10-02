"""Validate self-contained, accessible SVG assets published with the handbook."""

from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parent.parent
SVG_NS = "http://www.w3.org/2000/svg"


def validate(path: Path) -> list[str]:
    errors = []
    try:
        root = ET.parse(path).getroot()
    except ET.ParseError as exc:
        return [f"invalid XML: {exc}"]
    if root.tag != f"{{{SVG_NS}}}svg":
        errors.append("root must be svg with the SVG namespace")
    view_box = root.get("viewBox", "").split()
    try:
        dimensions = [float(value) for value in view_box]
        if len(dimensions) != 4 or dimensions[2] <= 0 or dimensions[3] <= 0:
            raise ValueError
    except ValueError:
        errors.append("viewBox must contain four numbers with positive width/height")
    for tag in ("title", "desc"):
        element = root.find(f"{{{SVG_NS}}}{tag}")
        if element is None or not "".join(element.itertext()).strip():
            errors.append(f"missing nonempty {tag}")
    for element in root.iter():
        tag = element.tag.rsplit("}", 1)[-1]
        if tag in {"script", "foreignObject", "image", "style", "animate", "animateTransform", "set"}:
            errors.append(f"unsupported element: {tag}")
        for key, value in element.attrib.items():
            attribute = key.rsplit("}", 1)[-1].lower()
            if attribute.startswith("on"):
                errors.append(f"event handler: {attribute}")
            if attribute in {"href", "src"} and not value.startswith("#"):
                errors.append(f"nonlocal resource: {attribute}")
            for target in re.findall(r"url\((.*?)\)", value, re.IGNORECASE):
                if not target.strip(" \"'").startswith("#"):
                    errors.append("nonlocal CSS resource")
    return errors


def main() -> int:
    files = sorted((ROOT / "docs/public/diagrams").glob("*.svg"))
    count = 0
    for path in files:
        for error in validate(path):
            print(f"ERROR {path.relative_to(ROOT)}: {error}")
            count += 1
    print(f"{len(files)} diagram(s) checked. {count} error(s).")
    return 1 if count else 0


if __name__ == "__main__":
    sys.exit(main())
