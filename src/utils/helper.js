export function wait(sec){
    let ms = sec * 1000;
    var start = Date.now(),
    now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}