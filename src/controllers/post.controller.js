const prisma = require("../lib/prisma");

//crate a new post
exports.createPost = async (req, res, next) => {
  try {
    const { slug, title, content, authorId } = req.body;
    const result = await prisma.post.create({
      data: {
        slug,
        title,
        content,
        author: { connect: { id: req.user.id } }, //Connect this post with the author whose id is authorId.
      },
    });
    res.json(result);
    
  } catch (err) {
    throw new Error(error);
  }
};

//update post
exports.updatePost = async (req, res, next) => {
  try {
    const { PostId } = req.params;
    const { title, content } = req.body;

    const post = await prisma.post.findUnique({
      where: { id:PostId },
    });

    if (post.authorId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }


    const result = await prisma.post.update({
      where: { id: PostId },
      data: {
        title: title,
        content: content,
      },
    });
    res.json(result);
    
  } catch (err) {
    throw new Error(err);
  }
};


//delete post
exports.deletePost = async (req, res, next) => {
  try {
    const { PostId } = req.params;

    const post = await prisma.post.findUnique({
      where: {
        id: PostId
      }
    });

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    // Only author can delete
    if (post.authorId !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized"
      });
    }

    await prisma.post.delete({
      where: {
        id: PostId
      }
    });

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully"
    });
 
  } catch (err) {
    next(err);
  }
};

//get all posts
exports.allPosts=async(req,res,next)=>{
    try{
 const result = await prisma.post.findMany()
 res.json(result)
 
    }
    catch (err) {
    next(err);
  }
}
