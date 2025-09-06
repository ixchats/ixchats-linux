//page.js, script runs on pages that don't have custom js

//page main, entry point
function pmain()
{
    console.log("pmain");

    pupdate(); //may have missed update from main text if <page>.js hadnt loaded
}

//page update, the config has changed
function pupdate()
{
    console.log("pupdate");

    //everything is done to localize
    if(config.lang && !config.localizedone)
    {
        localize(config.lang);
        config.localizedone = true;
    }
}
