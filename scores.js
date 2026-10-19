// Shared helper (no need to edit this file).
// Works out the winner and result text of every match in data.js
// and returns the series tally.
function computeSeries() {
    var s = { winsA: 0, winsB: 0, ties: 0 };
    MATCHES.forEach(function (m, i) {
        m.no = m.no || (i + 1);
        if (m.a.runs > m.b.runs) { m.winner = "A"; s.winsA++; }
        else if (m.b.runs > m.a.runs) { m.winner = "B"; s.winsB++; }
        else { m.winner = "T"; s.ties++; }

        if (!m.result) {
            var diff = Math.abs(m.a.runs - m.b.runs);
            if (m.winner === "A") m.result = TEAM_A + " won by " + diff + " runs";
            else if (m.winner === "B") m.result = TEAM_B + " won by " + diff + " runs";
            else m.result = "Match tied";
        }
    });
    return s;
}