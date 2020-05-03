import MatchInfo from './partials/matchinfo'
import BanPick from './partials/banpick'
import Teams from './partials/teams'
import Statistics from './partials/statistics'

const Match = ({ data }) => {
  const raw = data ? JSON.parse(data) : {}
  const {
    match_id,
    barracks_status_dire,
    barracks_status_radiant,
    chat,
    cluster,
    cosmetics,
    dire_score,
    dire_team_id,
    draft_timings,
    duration,
    engine,
    first_blood_time,
    game_mode,
    human_players,
    leagueid,
    lobby_type,
    match_seq_num,
    negative_votes,
    objectives,
    picks_bans,
    positive_votes,
    radiant_gold_adv,
    radiant_score,
    radiant_team_id,
    radiant_win,
    radiant_xp_adv,
    skill,
    start_time,
    teamfights,
    tower_status_dire,
    tower_status_radiant,
    version,
    replay_salt,
    series_id,
    series_type,
    league,
    radiant_team,
    dire_team,
    players,
    patch,
    all_word_counts,
    my_word_counts,
    loss,
    replay_url,
  } = raw

  return (
    <>
      {match_id && (
        <div className='container px-6 pt-6 pb-10'>
          <MatchInfo
            radiant_name={radiant_team.name}
            dire_name={dire_team.name}
            radiant_score={radiant_score}
            dire_score={dire_score}
            game_mode={game_mode}
            duration={duration}
            radiant_win={radiant_win}
          />
          <div className='h-10'></div>
          <BanPick picks_bans={picks_bans} radiant_team={radiant_team} dire_team={dire_team} />
          <div className='h-10'></div>
          <Statistics
            players={players}
            radiant_gold_adv={radiant_gold_adv}
            radiant_xp_adv={radiant_xp_adv}
            radiant_team={radiant_team}
            dire_team={dire_team}
          />
          <div className='h-10'></div>
          <Teams players={players} radiant_tag={radiant_team.tag} dire_tag={dire_team.tag} />
        </div>
      )}
    </>
  )
}

export default Match
