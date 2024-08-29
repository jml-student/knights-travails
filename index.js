function knightMoves(start, end) {
    const moveSet = [
        [2, 1],
        [2, -1],
        [1, 2],
        [1, -2],
        [-2, 1],
        [-2, -1],
        [-1, 2],
        [-1, -2],
    ]

    function isValid(position) {
        return (
            position[0] >= 0 &&
            position[0] <= 7 &&
            position[1] >= 0 &&
            position[1] <= 7
        )
    }

    const queue = [[start]]
    const visited = new Set()
    visited.add(start.toString())

    while (queue.length > 0) {
        const path = queue.shift()
        const currentPosition = path[path.length - 1]

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            console.log(
                `You made it in ${path.length} moves! Here's your path: `
            )
            for (let i = 0; i < path.length; i++) {
                console.log(path[i])
            }
        }

        for (let set of moveSet) {
            const nextPosition = [
                currentPosition[0] + set[0],
                currentPosition[1] + set[1],
            ]

            if (
                isValid(nextPosition) &&
                !visited.has(nextPosition.toString())
            ) {
                visited.add(nextPosition.toString())
                queue.push([...path, nextPosition])
            }
        }
    }
}

knightMoves([0, 0], [7, 7])
