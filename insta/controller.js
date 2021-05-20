
const instagram=require('instagram-web-api');
const { userName } = require('../server/server');
const client=new instagram({username:'sharkshark339',password:'Sara@123'})
// postImage(client)

//getdp('mr.top_notch')
async function getDp(req,res)
{
    var username=req.query.user
    
    var a=String(username)
    //console.log(a)
    await client.getUserByUsername({ username:a}).then((instagram)=>
    {
       // console.log(""+req.query.user+"")
        console.log(instagram)
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        output={
            link:instagram.profile_pic_url_hd,
            username:instagram.username,
            full_name:instagram.full_name,
            biography:instagram.biography,
            edge_followed_by:{count:instagram.edge_followed_by.count},
            edge_follow:{count:instagram.edge_follow.count},
            edge_owner_to_timeline_media:{count:instagram.edge_owner_to_timeline_media.count},
            is_private:instagram.is_private
        }
         res.json(output)
    }).catch((err)=>
    {
        
        res.json({link:"err"})
    })
    
    
}

module.exports={getDp}