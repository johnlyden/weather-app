import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';



function average(data) {
    return _.round (_.sum(data)/data.length);
}
export default (props) => {
    return (
        <div>
          <Card>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
          </Card>
        </div>
   );
}

