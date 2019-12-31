import * as ROT from "rot-js";

// const o = {
//   width: 11,
//   height: 5
// };
// const d = new ROT.Display(o);
// document.body.appendChild(d.getContainer() as any);

// for (let i = 0; i < o.width; i++) {
//   for (let j = 0; j < o.height; j++) {
//     if (!i || !j || i + 1 == o.width || j + 1 == o.height) {
//       d.draw(i, j, "#", "gray", "black");
//     } else {
//       d.draw(i, j, ".", "#666", "black");
//     }
//   }
// }
// d.draw(o.width >> 1, o.height >> 1, "@", "goldenrod", "black");

var map = new ROT.Map.Arena(10, 5);

var display1 = new ROT.Display({ width: 10, height: 5, fontSize: 18 });

map.create(function(x, y, wall) {
  display1.draw(x, y, wall ? "#" : ".", "gray", "black");
});

document.body.appendChild(display1.getContainer() as any);
