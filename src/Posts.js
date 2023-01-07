function Posts(props){
    return(
        <div class="card mt-4" >
        <img src={props.photo} class="card-img-top" alt="post"/>
        <div class="card-body">
          <p class="card-text">{props.caption}</p>
        </div>
      </div>
    );
}

export default Posts;