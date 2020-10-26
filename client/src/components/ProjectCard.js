import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StatusBtn from '../components/Statusbtn';
import StatusLogs from '../components/StatusLogs';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const ProjectCard = props => {
    const [expanded, setExpanded] = useState(false);
    const project = props.project

    const nextStat = (status) => {
        if(status=='1'){
            return(
                'color'
            )
        }
        else if(status=='2'){
            return(
                'color'
            )
        }
        else if(status=='3'){
            return(
                'color'
            )
        }
        else if(status=='4'){
            return(
                'gray'
            )
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: '100%',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
        cardHeader:{
            paddingLeft:'32px'
        },
        cardDescription:{
            paddingLeft:'32px',
            paddingTop:'0px',
            paddingBottom:'0px'
        }
        }));
    const classes = useStyles();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Card className={classes.root}>
        <CardHeader
            className={classes.cardHeader}
            alignItems="flex-start"
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                R
            </Avatar>
            }
            title={project.name}
            subheader= {"Start date: " + project.createdAt}
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
        />
        <CardContent
            className={classes.cardDescription}
        >
            <Typography variant="body2" color="textSecondary" component="p">
                Project Lead : Subaiyal
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Deadline : {project.deadLine}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {project.description} 
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <StatusBtn
                nextStatus={nextStat}
            />
            <IconButton
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography style={{paddingLeft:'18px'}} paragraph>Status Logs:</Typography>
                <StatusLogs 
                    logs={project.statusLogs}
                />
            </CardContent>
        </Collapse>
        </Card>
    )
}
export default ProjectCard;