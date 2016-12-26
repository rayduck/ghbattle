import axios from 'axios'

const id = 'clientid'
const sec = 'secret id'
const param = `?client_id${id}&client_secret=${sec}`

function getUserInfo (username = 'rayduck') {
  return axios.get(`https://api.github.com/users/${username}${param}`)
}

function getRepos (username = 'rayduck') {
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`)
}

function getTotalStars (repos) {
  return repos.data.reduce((prev, curr) => prev + curr.stargazers_count, 0)
}

async function getPlayerData (player) {
  try {
    const repos = await getRepos(player.login)
    const totalStars = await getTotalStars(repos)
    return {
      followers: player.followers,
      totalStars
    }
  } catch (error) {
    console.warn('Error in githubHelpers getPlayerData', error)
  }
}

function calculateScores (players) {
  return [
    (players[0].followers * 3 + players[0].totalStars + 1),
    (players[1].followers * 3 + players[1].totalStars + 1)
  ]
}

export async function getPlayersInfo (players) {
  try {
    const info = await Promise.all(players.map((username) => getUserInfo(username)))
    return info.map((user) => user.data)
  } catch (error) {
    console.warn('Error in githubHelpers getPlayersInfo', error)
  }
}

export async function battle (players) {
  try {
    const playerOneData = getPlayerData(players[0])
    const playerTwoData = getPlayerData(players[1])
    const data = await Promise.all([playerOneData, playerTwoData])
    return calculateScores(data)
  } catch (error) {
    console.warn('Error in githubHelpers battle', error)
  }
}
