let fields = [];
let currentShape = 'Cross';

function fillShape(id) {
  if (currentShape == 'Cross') {
    currentShape = 'Circle';
  } else {
    currentShape = 'Cross';
  }

  fields[id] = currentShape;
  console.log(fields);
}
