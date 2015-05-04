
var React = require('react');

module.exports = React.createClass({

  handleHeader1Rhythm: function(e){
    this.props.setH1Rhythm(e.target.value);
  },

  handleHeader2Rhythm: function(e){
    this.props.setH2Rhythm(e.target.value);
  },

  handleArticleRhythm: function(e){
    this.props.setArticleRhythm(e.target.value);
  },

  handleParagraphRhythm: function(e){
    this.props.setParagraphRhythm(e.target.value);
  },

  render: function() {
    var header1Rhythm = this.props.header1Rhythm;
    var header2Rhythm = this.props.header2Rhythm;
    var articleRhythm = this.props.articleRhythm;
    var paragraphRhythm = this.props.paragraphRhythm;

    header1Rhythm = Math.round(header1Rhythm*100)/100;
    header2Rhythm = Math.round(header2Rhythm*100)/100;
    articleRhythm = Math.round(articleRhythm*100)/100;
    paragraphRhythm = Math.round(paragraphRhythm*100)/100;

    return (
      <div className="panel-right">
        <div id="toc-right" className="toc">
        <h2 className="panel-h2">
          Rhythm
        </h2>
        <section>
          <h3 className="panel-h3">
            Header 1
          </h3>
          <div className="panel-option">
            <h4>
              ratio
            </h4>
            <input type="range"
              className="range-style"
              min="0"
              max="50"
              step="0.01"
              value={header1Rhythm}
              onChange={this.handleHeader1Rhythm}/>
            <pre>{header1Rhythm}</pre>
          </div>
         </section>
        <section>
        <h3 className="panel-h3">
          Header 2
        </h3>
        <div className="panel-option">
          <h4>
            ratio
          </h4>
          <input type="range"
            className="range-style"
            min="0"
            max="50"
            step="0.01"
            value={header2Rhythm}
            onChange={this.handleHeader2Rhythm}/>
          <pre>{header2Rhythm}</pre>
        </div>
        </section>
        <section>
         <h3 className="panel-h3">
           Article
         </h3>
         <div className="panel-option">
           <h4>
             ratio
           </h4>
           <input type="range"
             className="range-style"
             min="0"
             max="50"
             step="0.01"
             value={articleRhythm}
             onChange={this.handleArticleRhythm}/>
           <pre>{articleRhythm}</pre>
         </div>
        </section>
        <section>
          <h3 className="panel-h3">
            Paragraph
          </h3>
          <div className="panel-option">
            <h4>
              ratio
            </h4>
            <input type="range"
              className="range-style"
              min="0"
              max="50"
              step="0.01"
              value={paragraphRhythm}
              onChange={this.handleParagraphRhythm}/>
            <pre>{paragraphRhythm}</pre>
          </div>
        </section>
        </div>
      </div>
    )
  }
});
