import React from "react";

class Emotion extends React.Component {
    render() {
        var list = [];
        var data = this.props.data;
        var i = 0;

        while (i < data.length) {
            list.push(
                <li key={data[i].id}>
                    {data[i].id}{data[i].title}{data[i].desc}
                </li>
            );
            i = i + 1;
        }

        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default Emotion;
