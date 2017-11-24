import React from 'react';

export class Card extends React.Component {
    constructor(state) {
        super(state);
        this.state = {events: "all"};
    }

    render() {
        const divClass = {
            'padding-top': '4%',
        }
        
        var items = ['#e83e8c', '#20c997', '#868e96', '#FF7518', '#2780E3'];

        var item = items[Math.floor(Math.random()*items.length)];
        console.log(item);

        const cardBackground = {
            'background-color': item,
            'border-color': item,
        }

        const body_text_style = {
            'font-size': '1.2em',
        }

        function buildAlignCSS(val) {
            const align = {
                'float': val,
            }
            return align;
        }

        function toggleButton(e) {
            console.log(e);
        }
       

        if (this.state.events == "all") {
            return (
                <div className="row" id="DivElement" onClick={this.divClick} style={divClass} data={this.props}>
        
                    <div className="col-md-8 offset-md-2 card card-inverse" style={cardBackground}>
                        <div className="card-header text-center">
                            <h4 className="card-title"> {this.props.event.title}</h4>
                       
                        </div>
                        <div className="card-body body-text" style={body_text_style}>
                            <p className='card-text'> 
                                <a style={buildAlignCSS('left')}> {this.props.event.location}  </a>
                                <a style={buildAlignCSS('right')}> {this.props.event.date}</a>
                            </p>
                            <br />
                            
                            <p className="card-text"> {this.props.event.description}</p>
                        </div>
                        <div>
                            <button type="button"  style={buildAlignCSS('right')} className="btn btn-danger" data-toggle="button" onClick={toggleButton} aria-pressed="false" autocomplete="off">
                            RSVP
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        
        
        

    }
}