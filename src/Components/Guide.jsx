import Section from "./Section";

function Guide(){
    return(
        <div>
            <Section 
                title="Create" 
                description="Creates an empty Git repository in the current folder." 
                command="git init" />
            <Section 
                title="Rename" 
                description="Renames the current branch to main." 
                command="git branch -M main" />
            <Section 
                title="Upload" 
                description="Sends the main branch to the remote named origin." 
                command="git push -u origin main" />
            <Section 
                title="Connect" 
                description="Links this local project to your forked repository on GitHub, under the name origin." 
                command="Write the Git command that does what the description says, using the http link of your forked repository" />
        </div>
    );
}

export default Guide;