function getDistance(currentNode, targetNode) {
    var startX = parseInt(currentNode.coordinates[0]);
    var startY = parseInt(currentNode.coordinates[1]);

    var targetX = parseInt(targetNode.coordinates[0]);
    var targetY = parseInt(targetNode.coordinates[1]);

    distanceX = abs(targetX - startX);
    distanceY = abs(targetY - startY);
    return( distanceX + distanceY );
}

export default getDistance;