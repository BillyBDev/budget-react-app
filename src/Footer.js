import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

function Fanfare(props){
    if (props.showFanfare){
        return (
            <span className={"save-msg fadeout"}>Saved to your browser's local storage.</span>
        )
    } else {
        return (
            <span></span>
        )
    }
}

function Footer(props){

    const [showFanfare, toggleShowFanfare] = useState(false);
    const [lastTimeout, setLastTimeout] = useState("");

    return (
        <div class="footer">
            <span id="save">
            {/* minimal icon version of save button */}
            {/* <IconButton size="small" aria-label="save">
                <SaveOutlinedIcon onClick={() => {window.localStorage.setItem('myState', JSON.stringify(this.state))}}/>
            </IconButton> */}
            
            <Button
                variant="outlined"
                size="small"
                className="button"
                id="save-btn"
                startIcon={<SaveOutlinedIcon />} 
                onClick={() => {
                    // save state
                    window.localStorage.setItem('myState', JSON.stringify(props.appState))
                    // clear last timeout in case it's still active
                    clearTimeout(lastTimeout)
                    // show fanfare
                    toggleShowFanfare(true);
                    // hide fanfare after 2s
                    // set timeout ID
                    setLastTimeout(setTimeout(() => {toggleShowFanfare(false)}, 2000))

                }}               
                >      
                Save
                </Button>
                <Fanfare showFanfare={showFanfare}/>
            </span>
            by Billy Brown III&nbsp;&nbsp;
            <IconButton href="https://www.billybdev.com" target="_blank" size="small" aria-label="portfolio">
                <LanguageIcon />
            </IconButton>
            &nbsp;
            <IconButton href="https://www.github.com/BillyBDev" target="_blank" size="small" aria-label="github">
                <GitHubIcon />
            </IconButton>
        </div>
    )
}

export default Footer;