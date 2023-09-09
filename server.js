const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

// Endpoint to handle GET requests
app.get('/', (req, res) => {
    const slackName = req.query.slack_name ;
    const track = req.query.track ;

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    // Get the current UTC time within a +/-2 minute window
    const currentUTC = new Date(Date.now() + (Math.random() * 4 - 2) * 60 * 1000).toISOString();

    // GitHub URLs
    const githubFileURL = 'https://github.com/username/repo/blob/main/file_name.ext';
    const githubRepoURL = 'https://github.com/username/repo';

    // Create the response JSON
    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: currentUTC,
        track: track,
        github_file_url: githubFileURL,
        github_repo_url: githubRepoURL,
        status_code: 200
    };

    res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
