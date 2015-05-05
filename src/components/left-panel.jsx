
var React = require('react');

module.exports = React.createClass({

  generateCSSText: function(cssType, tag) {
    var html = tag + '{';
    for (var key in cssType) {
      if (cssType.hasOwnProperty(key)) {
        var keyFragment = key.split(/(?=[A-Z])/);
        keyFragment.forEach(function(goingToLower, key){
          keyFragment[key] = goingToLower.toLowerCase();
        });
        var cssProperty = keyFragment.join('-');
        html += cssProperty + ': ' + cssType[key] + ';';
      }
    }
    html += '}';
    return html
  },

  handleFontChange: function(e){
    this.props.setBaseFontSize(this.refs.baseLineHeight.getDOMNode().value, e.target.value);
  },

  handleHeightChange: function(e){
    this.props.setLineHeight(e.target.value, this.refs.baseFontSize.getDOMNode().value);
  },

  handleReferenceLine: function(e){
    this.props.toggleReferenceLine(e.target.checked);
  },

  handleReferenceLinePosition: function(e){
    this.props.setReferenceLinePosition(e.target.value)
  },

  render: function() {
    var baseFontSize = this.props.baseFontSize;
    var baseLineHeight = this.props.baseLineHeight;
    var referenceLine = this.props.referenceLine;
    var referenceLinePosition = this.props.referenceLinePosition;

    var styleP = {
        marginTop: this.props.pMarginTop,
        marginBottom: this.props.pMarginBottom,
        paddingTop: this.props.pPaddingTop,
        paddingBottom: this.props.pPaddingBottom,
        letterSpacing:this.props.pLetterSpacing,
      },

      styleH1 = {
        marginTop: this.props.h1MarginTop,
        marginBottom: this.props.h1MarginBottom,
        paddingTop: this.props.h1PaddingTop,
        paddingBottom: this.props.h1PaddingBottom,
        letterSpacing: this.props.h1LetterSpacing,
        fontSize: this.props.h1FontSize
      },

      styleH2 = {
        marginTop: this.props.h2MarginTop,
        marginBottom: this.props.h2MarginBottom,
        paddingTop: this.props.h2PaddingTop,
        paddingBottom: this.props.h2PaddingBottom,
        letterSpacing: this.props.h2LetterSpacing,
        fontSize: this.props.h2FontSize
      },

      styleArticle = {
        marginTop: this.props.articleMarginTop,
        marginBottom: this.props.articleMarginBottom,
        paddingTop: this.props.articlePaddingTop,
        paddingBottom: this.props.articlePaddingBottom,
        fontSize: this.props.articleFontSize,
      };

    var h1CSSText = this.generateCSSText(styleH1, 'h1');
    var h2CSSText = this.generateCSSText(styleH2, 'h2');
    var articleCSSText = this.generateCSSText(styleArticle, 'article');
    var paragraphCSSText = this.generateCSSText(styleP, 'p');

    return (
      <div className="panel-left">
        <div id="toc-left" className="toc">
          <section>
            <h2 className="panel-h2">
              Basic
            </h2>
            <div className="panel-option">
              <h4>
                base font size
              </h4>
              <input type="range"
                className="range-style"
                min="1"
                max="60"
                ref="baseFontSize"
                onChange={this.handleFontChange}
                value={baseFontSize} />
              <pre>{baseFontSize}px</pre>
            </div>
            <div className="panel-option">
              <h4>
                base line height
              </h4>
              <input type="range"
                className="range-style"
                min="1"
                max="120"
                ref="baseLineHeight"
                onChange={this.handleHeightChange}
                value={baseLineHeight}/>
              <pre>{baseLineHeight}px</pre>
            </div>
          </section>
          <section>
            <h2 className="panel-h2">
              Reference Line
            </h2>
            <div className="panel-option">
              <label><input
                type="checkbox"
                ref="referenceLine"
                onChange={this.handleReferenceLine}
                checked={referenceLine}/>show</label>
            </div>
            <div className="panel-option">
              <h4>
                position
              </h4>
              <input type="range"
                className="range-style"
                min="1"
                max="120"
                ref="handleReferenceLinePosition"
                onChange={this.handleReferenceLinePosition}
                value={referenceLinePosition}/>
              <pre>{referenceLinePosition}px</pre>
            </div>
          </section>
          <section>
            <h2 className="panel-h2">
              CSS
            </h2>
            <div className="panel-option cssCopyBoardSytle">
              <input type="text"
                id="rawCSS"
                className="copyBoardInput"
                value={h1CSSText + h2CSSText + articleCSSText +paragraphCSSText}
                readOnly />
              <div className="copyBoardButton">
                <button id="copyRawCSS"
                  data-clipboard-target="rawCSS"
                  data-copied-hint="Copied!"
                  title="Click to copy me.">
                  Copy CSS
                </button>
                <div>
                  <div className="arrow-up" />
                  <div className="copy-info">
                    Copy to clipboard
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
});
