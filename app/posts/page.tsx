//! ini server component
import CardList from "../components/CardList";
import ViewUserButton from "../components/ViewUserButton";
import styles from "./postPage.module.css"

interface Iposts { //bentuk obj
	userId:number,
	id:number,
	title:string,
	body:string
}

const base_url = "https://jsonplaceholder.typicode.com/posts";

const Posts = async() => {

	const response = await fetch(base_url,{
		// cache: "no-store"
		next: {revalidate:3600}
	})

	const posts: Iposts[] = await response.json();	

  return (
    <>
	 	<p>{new Date().toLocaleTimeString()}</p>
      
		<h1 className="text-fuchsia-500">POSTING PAGE</h1>
      {/* <p>{posts[0].title}</p> */}

	{posts.map((value,i) => {
		return (
      <CardList key={value.id}>
        {/* apa dalam ni akan jadi childern */}
        <p>Title : {value.title}</p>
        <p>Content : {value.body}</p>
        <ViewUserButton 
		  	userId={value.userId}
			/>
      </CardList>
    );
	})}

    </>
  );
}

export default Posts;
