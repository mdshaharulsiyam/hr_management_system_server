const express = require('express');
const {postteam,getTeam, updateTeam} = require('../../api/team');
const teamRoute = express.Router()
teamRoute.route("/").post(postteam).get(getTeam).patch(updateTeam)
module.exports = teamRoute