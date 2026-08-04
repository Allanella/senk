from PIL import Image
from pathlib import Path

root = Path('public')
files = [
    'parade1.JPG','parade2.JPG','class1.JPG','mass1.JPG','mass2.JPG','mass3.JPG',
    'choir1.JPG','choir2.JPG','sportsWear1.JPG','sportsWear2.JPG','class2.JPG','class3.JPG','class4.JPG',
    'cullture1.JPG','culture2.JPG','team1.JPG','team2.JPG','team3.JPG'
]

for name in files:
    path = root / name
    if not path.exists():
        continue
    out = root / f"{Path(name).stem}-compressed.jpg"
    with Image.open(path) as img:
        img = img.convert('RGB')
        max_dim = 900
        w, h = img.size
        if max(w, h) > max_dim:
            scale = max_dim / max(w, h)
            img = img.resize((int(w * scale), int(h * scale)))
        img.save(out, 'JPEG', quality=70, optimize=True)
        print(f'created {out}')
