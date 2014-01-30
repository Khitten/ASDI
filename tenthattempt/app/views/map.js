function(doc) {
  if (doc._id.substring(0,8) === "program:") {
    emit(doc._id.subtr(8), {
    	"title" : doc.title,
    	"acronym" : doc.acronym,
    	"months" : doc.months
    });
  }
};