const BaseService = require('./base.service');
let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService {
    constructor({IdeaRepository ,CommentRepository}) {
        super(CommentRepository);
        _ideaRepository = IdeaRepository;
        _commentRepository = CommentRepository;
    }

    async getIdeaComment(idIdea){
        if(!idIdea){
            const error = new Error();
            error.status = 400;
            error.message = 'idIdea must be send';
            throw error;
        }

        const idea = await _ideaRepository.get(idIdea);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idIdea does not exist';
            throw error;
        }

        const { comments } = idea;
        return comments;
    }

    async createComment(comment, ideaId){
        if(!idIdea){
            const error = new Error();
            error.status = 400;
            error.message = 'idIdea must be send';
            throw error;
        }

        const idea = await _ideaRepository.get(idIdea);
        if(!idea){
            const error = new Error();
            error.status = 404;
            error.message = 'idIdea does not exist';
            throw error;
        }

        const createComment = await _commentRepository.create(comment);
        idea.comments.push(createComment);

        return await _ideaRepository.update(ideaId, {comments: idea.comments});
    }

}

module.exports = CommentService;