import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditModal from './EditModal';
import EditComponent from './EditComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '75%', // 16:9
        backgroundPosition: "top",
        backgroundSize: "contain"

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
        backgroundColor: "#f7b600",
    },
}));

const UserCards = (props) => {
    const { firstName, lastName, phoneNumber, email } = props.item

    const [isOpen, setIsOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const avatarLetter = firstName[0] + lastName[0];
    const image = `/images/${firstName}.png`

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatarLetter}
                    </Avatar>
                }
                action={
                    <>
                    <IconButton aria-label="settings" onClick={handleMenu}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => {setIsOpen(true); setAnchorEl(null)}}>Edit</MenuItem>
                    <EditModal open={isOpen} onClose={() => setIsOpen(false)}>
                        <EditComponent key={props.item.id} handleInputChange={props.handleInputChange} userInfo={props.item} to="/" onClick={() => this.setState({isOpen: false})}/>
                    </EditModal>
                </Menu>
                </>
                }
                title={`${firstName} ${lastName} `}
            />
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Phone Number: {phoneNumber}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
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
                    <Typography paragraph>
                        Email: {email}
                    </Typography>
                </CardContent>
            </ Collapse >
        </Card>
    );
}

export default UserCards