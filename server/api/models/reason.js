import mongoose from 'mongoose';


const reasonSchema = new mongoose.Schema({

    reason: {
        title: {
            type: String
        },
        text: {
            type: String
        },
        value: {
            type: {
                Number
            }
        },
        goodOrBad: {
            type: {
                Boolean
            }
        }
    }
});

let model = mongoose.model('Reason', reasonSchema);

export default class Reason {

    create(req, res) {
        console.log('body', req.body);
        model.create(req.body,
            (err, reason) => {
                if (err || !reason) {
                    console.log('err', err.message);
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        reason: reason
                    });
                }
            });
    }
}
