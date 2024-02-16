function dijkstra(graph, start) {
    let distances = {};
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    let priorityQueue = [[0, start]];

    while (priorityQueue.length > 0) {
        let [currentDistance, currentNode] = priorityQueue.shift();

        if (currentDistance > distances[currentNode]) {
            continue;
        }

        for (let [neighbor, weight] of Object.entries(graph[currentNode])) {
            let distance = currentDistance + weight;

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                priorityQueue.push([distance, neighbor]);
                priorityQueue.sort((a, b) => a[0] - b[0]);
            }
        }
    }

    return distances;
}

const exampleGraph = {
    'A': {'B': 5, 'C': 3, 'D': 2},
    'B': {'A': 5, 'C': 2, 'E': 4},
    'C': {'A': 3, 'B': 2, 'D': 1},
    'D': {'A': 2, 'C': 1, 'E': 7},
    'E': {'B': 4, 'D': 7}
};

const initialNode = 'B';
const result = dijkstra(exampleGraph, initialNode);

for (let destination in result) {
    console.log(`Caminho mais curto de ${initialNode} para ${destination}: ${result[destination]}`);
}