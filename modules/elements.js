function didHitMario(element) {
  let { xBox: ex1, yBox: ey1, wBox: ew, hBox: eh } = element;

  let { xBox: mx1, yBox: my1, wBox: mw, hBox: mh } = elements.player;

  let [ex2, mx2] = [ex1 + ew, mx1 + mw];
  let [ey2, my2] = [ey1 + eh, my1 + mh];

  return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
}
