const Genie = require("../models/genie");

const genieConverter = {
  toFirestore: (genie) => {
    return {
      brand: genie.meta.brand,
      subject: genie.meta.subject,
      idea: genie.meta.idea,
      targetAudience: genie.meta.targetAudience,
      keywords: genie.meta.keywords,
      durationInSeconds: genie.meta.durationInSeconds,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Genie({
      id: snapshot.id,
      meta: {
        brand: data.brand,
        subject: data.subject,
        idea: data.idea,
        targetAudience: data.targetAudience,
        keywords: data.keywords,
        durationInSeconds: data.durationInSeconds,
      },
    });
  },
};

module.exports = genieConverter;
