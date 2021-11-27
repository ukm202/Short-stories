const Story = require('../models/story');

const dateTime = require('date-and-time');

// story_index, story_details, story_create_get, story_create_post, story_delete

const story_index = (req,res)=>{
    Story.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index.ejs', {title: 'Home', stories: result})
        })
        .catch((err)=>{
            res.status(404).render('404',{title: 'Story not found'});
        })

};

const story_details = (req,res)=>{
    const id = req.params.id;
    Story.findById(id)
        .then((result)=>{
            res.render('details.ejs', {title: 'Story detaials', story: result, dateTime});
        })
        .catch((err)=>{
            res.status(404).render('404',{title: 'Story not found'});
        })

};

const story_create_get = (req, res)=>{
    res.render('create.ejs',{title: 'Create a new story'});
};
const story_create_post = (req,res)=>{
    const story = new Story(req.body);
    story.save()
        .then((result)=>{
            res.redirect('/stories');
        })
        .catch((err)=>{
            res.status(404).render('404',{title: 'Story not created'});
        });
};

const story_delete = (req,res)=>{
    const id = req.params.id;
    Story.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect: '/stories'});
        })
        .catch((err)=>{
            res.status(404).render('404',{title: 'Story not deleted'});
        })
};

module.exports = {
    story_index,
    story_details,
    story_create_get, 
    story_create_post, 
    story_delete
};