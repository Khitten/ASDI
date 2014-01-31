// JavaScript Document
//  Cassandra Morath
//	ASDI 1401
//  01/30/14

function(doc) {
  if (doc.created_at) {
    emit(doc.created_at, doc);
  }
};