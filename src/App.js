import './App.css';
import React from 'react';
import {marked} from 'marked' ;

let text = `# FCC React Markdown Previewer

## My Colorful take on this project
### FCC Camper Klay Dowe:

Here is my [GitHub Profile](https://github.com/KlayVonDowe)
here is some of my favorite code, \`<div><h1>Title</h1></div>\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

One of my favorite shows **Supernatural**
another would be _FairyTale_.
and last but not lease **_blackList_**


> here is a block Quote



Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

~~this is a secret message that i am gonna cross out~~

`;

marked.setOptions({
  breaks: true
})

class MarkdownPreviewer extends React.Component {
  constructor(props){
    super(props);
        this.state={
          textarea:text,
          outPut:text
        };
    
    this.handleChange=this.handleChange.bind(this);
  }
    handleChange(event){
    this.setState({
      textarea:event.target.value
    })
      
      
  }
  render(){
    return (
      <div className='container-fluid'>
        <h1 id='title'> MarkDown Preview </h1>
        <h4 id='title'> A Pen By <u> <a href="https://github.com/KlayVonDowe">Klay Dowe</a></u></h4>
        <div class='row'>
        <Markdown textp={this.state.textarea} handle={this.handleChange}/> 
        <Preview outPut={this.state.textarea} />
        </div>
      </div>)
  }
}
const Markdown = (props) => {
    return(
      <div className="col" id='markdown' >
      <h1 className="text-center">MarkDown</h1>
        <hr></hr>
                  <textarea id="editor" onChange={props.handle} value={props.textp}  class="form-control h-75" />        
      </div>
    )  
}
const Preview = (props) => {  
  
    return(<div className="col" id='previewModel'>
    <h1 class="text-center">Preview</h1> 
        <hr></hr>
        <div id='preview' dangerouslySetInnerHTML={{
            __html: marked.parse(props.outPut) }} />
      </div>
    )  
}
export default MarkdownPreviewer;

