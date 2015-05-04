
var React = require('react');
var _ = require('lodash');

var PassagePreview = require('./passage-preview.jsx');
var RightPanel = require('./right-panel.jsx');
var LeftPanel = require('./left-panel.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    var rhythm = {};
    try {
      var param = window.location.search;
      rhythm = this.parseParam(param);
      if (rhythm.baseFontSize && rhythm.baseLineHeight) {
        rhythm.lineHeight = rhythm.baseLineHeight / rhythm.baseFontSize;
      }
    } catch(e) {
    }
    _.defaults(rhythm, {
      baseFontSize: '24px',
      baseLineHeight: '44px',
      lineHeight: 44/24 +'em',
      referenceLine: true,
      referenceLinePosition: '33px',
      paragraph: {
          pFontSize: 24/24*100 + '%',
          pLetterSpacing: '.08em',
          pMarginTop: 0,
          pMarginBottom: 44*.49/24 + 'em',
          pPaddingTop: 0,
          pPaddingBottom: 44*.49/24 + 'em',
      },
      header1: {
          h1FontSize: 45/24 + 'em',
          h1LetterSpacing: '.2em',
          h1MarginTop: 0,
          h1MarginBottom: 44*5/45 + 'em',
          h1PaddingTop: 0,
          h1PaddingBottom: 44*5/45 + 'em',
      },
      header2: {
          h2FontSize: 30/24 + 'em',
          h2LetterSpacing: '.1em',
          h2MarginTop: 0,
          h2MarginBottom: 44*1/30 + 'em',
          h2PaddingTop: 0,
          h2PaddingBottom: 44*1/30 + 'em',
      },
      article: {
        articleMarginTop: 0,
        articleMarginBottom: 44*2.76/24 + 'em',
        articlePaddingTop: 0,
        articlePaddingBottom: 44*2.76/24 + 'em',
      },
    });
    return rhythm
  },

  setBaseFontSize: function(height, font) {
    var baseLineHeight = height;
    var baseFontSize = font;
    lineHeight = baseLineHeight/baseFontSize;
    this.setState({baseFontSize: baseFontSize, lineHeight: lineHeight, baseLineHeight: baseLineHeight}, this.updateUrl);
  },

  setLineHeight: function(height, font) {
    var baseLineHeight = height;
    var baseFontSize = font;
    lineHeight = baseLineHeight/baseFontSize;
    this.setState({lineHeight: lineHeight, baseLineHeight: baseLineHeight}, this.updateUrl);
  },

  toggleReferenceLine: function(referenceLine){
    if (referenceLine) {
      this.setState({referenceLine: true});
    } else {
      this.setState({referenceLine: false});
    }
  },

  setReferenceLinePosition: function(referenceLinePosition){
    this.setState({referenceLinePosition: referenceLinePosition});
  },

  setH1Rhythm: function(h1Rhythm){
    var baseFontSize = parseInt(this.state.baseFontSize);
    var denominator = 0 + 5 + 0 + 5;
    this.setState({header1:{h1MarginTop: h1Rhythm*0/denominator + 'em',
                            h1MarginBottom: h1Rhythm*5/denominator + 'em',
                            h1PaddingTop: h1Rhythm*0/denominator + 'em',
                            h1PaddingBottom: h1Rhythm*5/denominator + 'em',
                            h1FontSize: 45/24 + 'em',
                            h1LetterSpacing: '.2em',
                          }}, this.updateUrl);
  },

  setH2Rhythm: function(h2Rhythm){
    var baseFontSize = parseInt(this.state.baseFontSize);
    var denominator = 0 + 1 + 0 + 1;
    this.setState({header2:{h2MarginTop: h2Rhythm*0/denominator + 'em',
                            h2MarginBottom: h2Rhythm*1/denominator + 'em',
                            h2PaddingTop: h2Rhythm*0/denominator + 'em',
                            h2PaddingBottom: h2Rhythm*1/denominator + 'em',
                            h2FontSize: 30/24 + 'em',
                            h2LetterSpacing: '.1em',
                          }}, this.updateUrl);
  },

  setArticleRhythm: function(articleRhythm){
    var denominator = 0 + 2.76 + 0 + 2.76;
    this.setState({article:{articleMarginTop: articleRhythm*0/denominator + 'em',
                            articleMarginBottom: articleRhythm*2.76/denominator + 'em',
                            articlePaddingTop: articleRhythm*0/denominator + 'em',
                            articlePaddingBottom: articleRhythm*2.76/denominator + 'em',
                          }}, this.updateUrl);
  },

  setParagraphRhythm: function(paragraphRhythm){
    var baseFontSize = parseInt(this.state.baseFontSize);
    var denominator = 0 + .49 + 0 + .49;
    this.setState({paragraph:{pMarginTop: paragraphRhythm*0/denominator + 'em',
                              pMarginBottom: paragraphRhythm*.49/denominator + 'em',
                              pPaddingTop: paragraphRhythm*0/denominator + 'em',
                              pPaddingBottom: paragraphRhythm*.49/denominator + 'em',
                              pFontSize: 24/24*100 + '%',
                              pLetterSpacing: '.08em',
                          }}, this.updateUrl);
  },

  parseParam: function(str){
    var keyValues = {};
    var rhythm = {};
    str = str.replace('?', '');
    keyValues = str.split('&');
    keyValues.forEach(function(keyValue){
      var key = keyValue.split('=')[0];
      var value = keyValue.split('=')[1];
      if (key==='h1Rhythm') {
        var denominator = 0 + 5 + 0 + 5;
        rhythm.header1 = {
          h1MarginTop: value*0/denominator + 'em',
          h1MarginBottom: value*5/denominator + 'em',
          h1PaddingTop: value*0/denominator + 'em',
          h1PaddingBottom: value*5/denominator + 'em',
        };

      } else if (key==='h2Rhythm') {
        var denominator = 0 + 1 + 0 + 1;
        rhythm.header2 = {
          h2MarginTop: value*0/denominator + 'em',
          h2MarginBottom: value*1/denominator + 'em',
          h2PaddingTop: value*0/denominator + 'em',
          h2PaddingBottom: value*1/denominator + 'em',
        };

      } else if (key==='articleRhythm') {
        var denominator = 0 + 2.76 + 0 + 2.76;
        rhythm.article = {
          articleMarginTop: value*0/denominator + 'em',
          articleMarginBottom: value*2.76/denominator + 'em',
          articlePaddingTop: value*0/denominator + 'em',
          articlePaddingBottom: value*2.76/denominator + 'em',
        };

      } else if (key==='paragraphRhythm') {
        var denominator = 0 + .49 + 0 + .49;
        rhythm.paragraph = {
          pMarginTop: value*0/denominator + 'em',
          pMarginBottom: value*.49/denominator + 'em',
          pPaddingTop: value*0/denominator + 'em',
          pPaddingBottom: value*.49/denominator + 'em',
        };

      } else {
        rhythm[key] = value;
      }
    });
    return rhythm;
  },

  getQueryString: function(obj) {
    var qs = _.reduce(obj, function(result, value, key) {
      if (typeof value == 'string') { value = value.replace('px', '');}
      return result += key + '=' + value + '&';
    }, '').slice(0, -1);
    return qs;
  },

  updateUrl: _.debounce(function(){
    var qs = this.getQueryString({
      baseFontSize: this.state.baseFontSize,
      baseLineHeight: this.state.baseLineHeight,
      h1Rhythm:        Math.round((parseFloat(this.state.header1.h1MarginTop) + parseFloat(this.state.header1.h1MarginBottom) +
                                    parseFloat(this.state.header1.h1PaddingTop) + parseFloat(this.state.header1.h1PaddingBottom))*100)/100,
      h2Rhythm:        Math.round((parseFloat(this.state.header2.h2MarginTop) + parseFloat(this.state.header2.h2MarginBottom) +
                                    parseFloat(this.state.header2.h2PaddingTop) + parseFloat(this.state.header2.h2PaddingBottom))*100)/100,
      articleRhythm:   Math.round((parseFloat(this.state.article.articleMarginTop) + parseFloat(this.state.article.articleMarginBottom) +
                                    parseFloat(this.state.article.articlePaddingTop) + parseFloat(this.state.article.articlePaddingBottom))*100)/100,
      paragraphRhythm: Math.round((parseFloat(this.state.paragraph.pMarginTop) + parseFloat(this.state.paragraph.pMarginBottom) +
                                    parseFloat(this.state.paragraph.pPaddingTop) + parseFloat(this.state.paragraph.pPaddingBottom))*100)/100,
    });
    window.history.pushState(this.state, '', '?' + qs);
  }, 200),

  render: function() {
    var baseFontSize = parseInt(this.state.baseFontSize);
    var baseLineHeight = parseInt(this.state.baseLineHeight);
    var lineHeight = parseFloat(this.state.lineHeight);

    var paragraph = this.state.paragraph;
    var header1 = this.state.header1;
    var header2 = this.state.header2;
    var article = this.state.article;

    var referenceLine = this.state.referenceLine;
    var referenceLinePosition = parseInt(this.state.referenceLinePosition);

    var header1Rhythm = parseFloat(this.state.header1.h1MarginTop) + parseFloat(this.state.header1.h1MarginBottom) +
                        parseFloat(this.state.header1.h1PaddingTop) + parseFloat(this.state.header1.h1PaddingBottom);
    var header2Rhythm = parseFloat(this.state.header2.h2MarginTop) + parseFloat(this.state.header2.h2MarginBottom) +
                        parseFloat(this.state.header2.h2PaddingTop) + parseFloat(this.state.header2.h2PaddingBottom);
    var articleRhythm = parseFloat(this.state.article.articleMarginTop) + parseFloat(this.state.article.articleMarginBottom) +
                        parseFloat(this.state.article.articlePaddingTop) + parseFloat(this.state.article.articlePaddingBottom);
    var paragraphRhythm = parseFloat(this.state.paragraph.pMarginTop) + parseFloat(this.state.paragraph.pMarginBottom) +
                          parseFloat(this.state.paragraph.pPaddingTop) + parseFloat(this.state.paragraph.pPaddingBottom);

    return (
      <div className="center">
        <div className="column-container">
          <RightPanel
            setH1Rhythm={this.setH1Rhythm}
            setH2Rhythm={this.setH2Rhythm}
            setArticleRhythm={this.setArticleRhythm}
            setParagraphRhythm={this.setParagraphRhythm}
            header1Rhythm={header1Rhythm}
            header2Rhythm={header2Rhythm}
            articleRhythm={articleRhythm}
            paragraphRhythm={paragraphRhythm}/>

          <PassagePreview
            {...paragraph}
            {...header1}
            {...header2}
            {...article}
            baseFontSize={baseFontSize}
            baseLineHeight={baseLineHeight}
            lineHeight={lineHeight}
            referenceLine={referenceLine}
            referenceLinePosition={referenceLinePosition}/>

          <LeftPanel
            paragraph={paragraph}
            header1={header1}
            header2={header2}
            baseFontSize={baseFontSize}
            baseLineHeight={baseLineHeight}
            setBaseFontSize={this.setBaseFontSize}
            setLineHeight={this.setLineHeight}
            referenceLine={referenceLine}
            referenceLinePosition={referenceLinePosition}
            toggleReferenceLine={this.toggleReferenceLine}
            setReferenceLinePosition={this.setReferenceLinePosition}/>
        </div>
      </div>
    )
  }
});
