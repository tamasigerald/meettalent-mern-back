const Candidate = require("../models/Candidate");

async function listCandidates(req, res) {
  try {
    const candidatesList = await Candidate.find();
    res.json({ results: candidatesList });
  } catch (err) {
    res.json({ error: "Error al consultar la base de datos" });
  }
}

async function createCandidate(req, res) {
  try {
    const newCandidate = new Candidate();
    newCandidate.name = req.body.name;
    newCandidate.surname = req.body.surname;
    newCandidate.email = req.body.email;
    newCandidate.avatar = req.body.avatar;
    newCandidate.age = req.body.age;
    newCandidate.rol = req.body.rol;
    newCandidate.phone = req.body.phone;
    newCandidate.city = req.body.city;
    newCandidate.keyWords.creativity = req.body.creativity;
    newCandidate.keyWords.uxui = req.body.uxui;
    newCandidate.keyWords.sketch = req.body.sketch;
    newCandidate.keyWords.projects = req.body.projects;
    newCandidate.keyWords.empathy = req.body.empathy;
    newCandidate.keyWords.html = req.body.html;
    newCandidate.save();
    res.json({ saved: true });
  } catch (err) {
    res.json({ saved: false });
  }
}

// async function filterCandidates(req, res) {
//   try {
//     const word = req.params.filter;
//     console.log(word);
//     const query = { name: /Ala/ };
//     const result = await Candidate.find(query);
//     res.json({ results: result });
//   } catch (err) {
//     res.json({ error: "Error al consultar la base de datos" });
//   }
// }

module.exports = {
  listCandidates,
  createCandidate,
  //   filterCandidates,
};
