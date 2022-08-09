# Graphs

- A set of values related in a pair-wise fashion.
- Each value is a _node_, connected by _edges_ to other nodes.
- Edges can have values as well

## Types of Graphs

### Directed & Undirected

- Directed: Can only traverse between nodes in a single direction. e.g: Twitter
- Undirected: Can traverse between nodes in either direction. e.g: Facebook

### Weighted & Unweighted

- Weighted: Edges have a value associated with them. e.g: Google Maps for calculating the distance between two points(nodes)
- Unweighted: Edges have no value associated with them. e.g:

### Cyclic & Acyclic

- Cyclic: A graph that some of the nodes are connected in a cyclic manner.
- Acyclic: A graph that none of the nodes are connected in a cyclic manner.

> DAG: Directed Acyclic Graph

## How To Build Graphs

### Edge List

- Shows the relationship between nodes

Given

              2 ---- 0
            /   \
           1 --- 3

        ```js
        const graph = [
            [0, 2],
            [2, 1],
            [2, 3],
            [1, 3],
        ];
        // If it was a weighted list, we would have something like this:
        const graph = [
            [0, 2, 1],
            [2, 1, 3],
            [2, 3, 1],
            [1, 3, 1],
        ];
        // Where the last value in each array is the weight of the connecting edge
        ```

### Adjacenct List

- Can use an array or object to represent the graph, as such:

        ```js
        const graph = {
            0: [2], 1: [2,3], 2: [1,3], 3: [1,2]
        };
        ```

        OR


        ```js
        const graph = [[2], [2,3], [1,3], [1,2]]; // Here the index of the array is the value of the node and the value of the array is the array of nodes that are connected to the node. If it was a weighted list, each of the values of the nested array would not be a single values, but objects, showing both weight and value.
        ```

### Adjacency Matrix

        ```js
        const graph = [
            [0, 0, 1, 0],
            [0, 0, 1, 1],
            [1, 1, 0, 1],
            [0, 1, 1, 0]
        ];
        ```

        OR

        ```js
        const graph = {
            0: [0, 0, 1, 0],
            1: [0, 0, 1, 1],
            2: [1, 1, 0, 1],
            3: [0, 1, 1, 0]
        }; // Here the index of the array is the value of the node and the value of the array is the array of nodes that are connected to the node, using 1 and 0 to represent connected and not connected. If it was a weighted graph, the value of the array would be the weight of the edge, instead of 1.

#### Advantages & Disadvantages of Graphs

| Advantages    | Disadvantages   |
| ------------- | --------------- |
| Relationships | Scaling is hard |
