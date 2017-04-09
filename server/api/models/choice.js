import mongoose from 'mongoose';


const choiceSchema = new mongoose.Schema({

    good: {
        text: {
            type: String
        },
        value: {
            type: {
                Number
            }
        }
    },
    evil: {
        text: {
            type: String
        },
        value: {
            type: {
                Number
            }
        }
    }
});

let model = mongoose.model('Choice', choiceSchema);

export default class Choice {



    create(req, res) {
        console.log('body', req.body);
        model.create(req.body,
            (err, choice) => {
                if (err || !choice) {
                    console.log('err', err.message);
                    res.status(500).send(err.message);
                } else {
                    res.json({
                        success: true,
                        choice: choice
                    });
                }
            });
    }

}
