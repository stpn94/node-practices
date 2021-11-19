const models = require('../models');
const moment = require('moment');
const User = require('../models/User');

module.exports = {
    index: async function(req, res, next) {
        try { 


            let total;
            let curPage = req.params.page;
            await models.Board.findAndCountAll({
            }).then(result => {
                total = result.count 
                console.log(total);
            })
            let pageCount = 5;
            let blockNum = (Math.floor(((curPage - 1) / pageCount | 0)) | 0);
            let blockStartNum = (pageCount * blockNum) + 1;
            let blockLastNum = blockStartNum + (pageCount - 1);

            if (total % pageCount === 0) {
                lastPageNum = (Math.floor(total / pageCount) | 0);
            }
            else {
                lastPageNum = (Math.floor(total / pageCount) | 0) + 1;
            }


          

            console.log("pageCount : "  + pageCount);
            console.log("blockNum : "  + blockNum);
            console.log("blockStartNum : "  + blockStartNum);
            console.log("blockLastNum : "  + blockLastNum);
            console.log("lastPageNum : "  + lastPageNum);

            let pageNum = req.params.page; // 요청 페이지 넘버
            let offset = 0;
            
            if(pageNum > 1){
              offset = 5 * (pageNum - 1);
            }
            
            if (total % pageCount === 0) {
                lastPageNum = (Math.floor(total / pageCount) | 0);
            }
            else {
                lastPageNum = (Math.floor(total / pageCount) | 0) + 1;
            }     

            const results = await models.Board.findAll({
                attributes: ['no', 'title', 'contents', 'regDate', 'hit' , 'groupNo'
                ,'orderNo' , 'depth' , "userNo" ],
                order: [
                    ['no', 'DESC']
                ],            
                include: {
                    model: models.User,
                    required: true,
                   
                },
                offset: offset,
                limit: 5
            });
      
    
            res.render('board/index', {
                kwd : null,
                curPageNum: curPage,
                blockStartNum : blockStartNum,
                blockLastNum : blockLastNum,
                lastPageNum : lastPageNum,


                boards: results,
                moment: moment
            });
         
        } catch(e) { 
            next(e);
        }         
    },
    

    _delete: async function(req, res, next) {
        try { 
             
              
            await models.Board.destroy({
                where: {
                    no : req.params.no
                }
            });
            res.redirect('/board');
        } catch(e) {
            next(e);
        }   
    },
    update:  async function(req, res) {

        console.log("GET: Update " )

        const result = await models.Board.findOne({       
            attributes: ['no', 'title', 'contents', 'regDate', 'hit' , 'groupNo'
            ,'orderNo' , 'depth' , 'userNo'],
            where : {
                no : req.params.no
            }
        })   
        res.render('board/update', { 
            board : result
        });
    },
    _update: async function(req, res, next) {
        try { 

         
            await models.Board.update({
                 title : req.body.title,
                 contents : req.body.contents,                                
                },
                {where : { no : req.params.no} })    

            res.redirect('/board');
        } catch(e) {
            next(e);
        }   
    },
    add: function(req, res) {
        res.render('board/add', );
    },
    _add: async function(req, res, next) {
        try {        
                      
            await models.Board.create({
                title : req.body.title , 
                contents : req.body.contents,
                hit : 0,
                groupNo : 0,
                orderNo : 0,
                depth : 0 ,
                userNo : req.session.authUser.no


            });
            res.redirect('/board');
        } catch(e) {
            next(e);
        }        
    },
    view: async function(req, res) {

        try{
           
            const result = await models.Board.findOne({       
                attributes: ['no', 'title', 'contents', 'regDate', 'hit' , 'groupNo'
                ,'orderNo' , 'depth' , 'userNo'],
                where : {
                    no : req.params.no
                }
            })    
            let gethit = result.hit;
          

            await models.Board.update({ hit : gethit = gethit + 1},
                {where : { no : req.params.no} })    
    
            res.render('board/view', {
                board : result
            });
        }
        catch(e) {
            next(e);
        }      
    },
}