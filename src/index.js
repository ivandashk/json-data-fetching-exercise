import jsonQuery from 'json-query';
import nestedProperty from 'nested-property';
import data from './data.json';

function GetForgeIdByCoordinates(sector, row, seat) {
    console.log(`Getting forgeId by coordinates (Sector ${sector}, Row ${row}, Seat ${seat}). Result: `);
    var answer = 0;
    //var answer = nestedProperty.get(data. ???);

    console.log(answer);
    return answer;
}

function GetCoordinatesByForgeId(forgeId) {
    console.log(`Getting coordinates by forgeId (ForgeId: ${forgeId}). Result: `);
    var sector = 0;
    var row = 0;
    var seat = 0;
    var answer = [sector, row, seat]
    //var answer = jsonQuery(???);
    
    console.log(answer);
    return answer;
}

GetForgeIdByCoordinates(6, 2, 9);
GetForgeIdByCoordinates(6, 7, 2);
GetForgeIdByCoordinates(6, 5, 10);

GetCoordinatesByForgeId(6358);
GetCoordinatesByForgeId(4634);
GetCoordinatesByForgeId(4797);