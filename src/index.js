import jsonQuery from 'json-query';
import nestedProperty from 'nested-property';
import jsonq from 'jsonq';
import data from './data.json';

function GetForgeIdByCoordinates(sector, row, seat) {
    console.log(`Getting forgeId by coordinates (Sector ${sector}, Row ${row}, Seat ${seat}). Result: `);
    var answer = nestedProperty.get(data,`sectors.${sector-1}.rows.${row-1}.seats.${seat-1}.forgeId.${1}`);

    console.log(answer);
    return answer;
}

function GetCoordinatesByForgeId(argumentId) {
    console.log(`Getting coordinates by forgeId (forgeId: ${argumentId}). Result: `);
    var jsonQdata = jsonQ(data);
    var id = jsonQdata.find('forgeId', function() {
        if (this instanceof Array)
            return this[1] === argumentId;
    });
    var path = id.path();
    var sector = parseInt(path[1]) + 1;
    var row = parseInt(path[3]) + 1;
    var seat = parseInt(path[5]) + 1;

    var answer = [sector, row, seat]
    console.log(answer);
    return answer;
}

function GetNumberRowsBySector(sector) {
    console.log(`Getting all rows by sector (Sector ${sector}). Result: `);
    var answer = nestedProperty.get(data,`sectors.${sector-1}.rows`);
    console.log(answer);
    return answer;
}
function GetNumberOfSeats(sector,row) {
    console.log(`Getting all rows by sector (Sector ${sector}, Row ${row}). Result: `);
    var answer = nestedProperty.get(data,`sectors.${sector-1}.rows.${row-1}.seats`);
    console.log(answer);
    return answer;
}
GetForgeIdByCoordinates(6, 2, 9);
GetForgeIdByCoordinates(6, 7, 2);
GetForgeIdByCoordinates(6, 5, 10);

GetCoordinatesByForgeId(6358);
GetCoordinatesByForgeId(4634);
GetCoordinatesByForgeId(4842);

GetNumberRowsBySector(1);
GetNumberRowsBySector(6);
GetNumberRowsBySector(2);

GetNumberOfSeats(6, 2);
GetNumberOfSeats(5, 5);
GetNumberOfSeats(6, 3);
