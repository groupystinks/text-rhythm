
var React = require('react');

module.exports = React.createClass({

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
            <div className="panel-option">
              <label>
                Raw CSS
              </label>
            </div>
          </section>
        </div>
      </div>
    )
  }
});
