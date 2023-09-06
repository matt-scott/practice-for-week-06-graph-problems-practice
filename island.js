function getNeighbors(row, col, graph) {
  let neighbors = [];
  let top;
  let bottom;
  let left;
  let right;

  // Check top
  // row - 1, col
  if (row - 1 !== -1) {
    if (graph[row - 1][col] === 1) {
      top = [[row - 1,col]];
      neighbors = neighbors.concat(top);
    }
  }

  // Check bottom
  // row + 1, col
  if (row + 1 !== graph.length) {
    if (graph[row + 1][col] === 1) {
      bottom = [[row + 1,col]];
      neighbors = neighbors.concat(bottom);
    }
  }

  // Check left
  // row, col - 1
  if (col - 1 !== -1) {
    if (graph[row][col - 1] === 1) {
      left = [[row,col - 1]];
      neighbors = neighbors.concat(left);
    }
  }

  // Check right
  // row, col + 1
  if (col + 1 !== graph[0].length) {
    if (graph[row][col + 1] === 1) {
      right = [[row,col + 1]];
      neighbors = neighbors.concat(right);
    }
  }

  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Create a stack, put the starting node in the stack
  let currentNode = [row,col];
  let stack = [[row,col]];

  // Put the stringified starting node in visited
  let stringNode = currentNode.toString();
  visited.add(stringNode);

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {

    // Pop the first node
    currentNode = stack.pop();

    // DO THE THING (increment size by 1)
    if (graph[currentNode[0]][currentNode[1]] === 1) {
      size++;
    }

    // Then push all the UNVISITED neighbors on top of the stack
    let neighbors = getNeighbors(currentNode[0], currentNode[1] ,graph);
    // and mark them as visited
    neighbors.forEach( element => {
      stringNode = element.toString();
      // if stringNode not in set
      if (!visited.has(stringNode)) {
        // add stringNode to set
        visited.add(stringNode);
        // push element to stack
        stack.push(element);
      }
    });

  }

  return size;

}


module.exports = [getNeighbors, islandSize];