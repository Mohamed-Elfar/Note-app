import toast from "react-hot-toast";
import supabase from "./supabase";

// GET ALL NOTES

// curl 'https://wajnfgvynztsmpfaypsf.supabase.co/rest/v1/note?select=*'
// -H "apikey: SUPABASE_KEY"
// -H "Authorization: Bearer SUPABASE_KEY"


export async function getNotes(userId) {
  const { data: notes, error } = await supabase
    .from("note")
    .select("*")
    .eq("userId", userId) 
    .eq("deleted", false)  
    .order("pin", { ascending: false });
  if (error) {
    throw new Error(error.message); // optional: get readable error
  }
 
  return notes;
}

// GET NOTE BY ID

// curl 'https://wajnfgvynztsmpfaypsf.supabase.co/rest/v1/note?select=id,{noteID}'
// -H "apikey: SUPABASE_KEY" \
// -H "Authorization: Bearer SUPABASE_KEY"

export async function getNote(id) {
  const { data: note, error } = await supabase
    .from("note")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    toast.error("Could not load the note");

    throw new Error(error);
  }

  return note;
}
export async function getNoteforSearch(field, content) {
  const { data: note, error } = await supabase
    .from("note")
    .select("*")
    .eq(field, content);

  if (error) {
    toast.error("Could not load the note");

    throw new Error(error);
  }

  return note;
}

// export async function getNote(field, content) {
//   const { data: note, error } = await supabase
//     .from("note")
//     .select("*")
//     .eq(field, content);

//   if (error) {
//     toast.error("Could not load the note");

//     throw new Error(error);
//   }

//   return note;
// }

// ADD NOTE

// curl -X POST 'https://wajnfgvynztsmpfaypsf.supabase.co/rest/v1/note'
// -H "apikey: SUPABASE_KEY"
// -H "Authorization: Bearer SUPABASE_KEY"
// -H "Content-Type: application/json"
// -H "Prefer: return=minimal"
// -d '{ "title": {title}, "content": {content} }'

export async function addNote(note) {
  const { data, error } = await supabase
    .from("note")
    .insert([
      {
        title: note?.title,
        content: note?.content,
        userId: note?.userId,
      },
    ])
    .select();

  if (error) {
    toast.error("Could not add note");
    throw new Error(error);
  }

  toast.success("Note added successfully");
  return data[0];
}

// UPDATE NOTE

// curl -X PATCH 'https://wajnfgvynztsmpfaypsf.supabase.co/rest/v1/note?id=eq.{noteID}'
// -H "apikey: SUPABASE_KEY"
// -H "Authorization: Bearer SUPABASE_KEY"
// -H "Content-Type: application/json"
// -H "Prefer: return=minimal"
// -d '{ "title": {noteTitle}, "content": {noteContent} }'

export async function updateNote(note) {
  const { data, error } = await supabase
    .from("note")
    .update({
      title: note?.title,
      content: note?.content,
    })
    .eq("id", note?.id)
    .select();

  if (error) {
    toast.error("Could not update note");
    throw new Error(error);
  }

  toast.success("Note updated successfully");
  return data[0];
}

// DELETE NOTE

// curl -X DELETE 'https://wajnfgvynztsmpfaypsf.supabase.co/rest/v1/note?id=eq.{noteID}'
// -H "apikey: SUPABASE_KEY"
// -H "Authorization: Bearer SUPABASE_KEY"

export async function deleteNote(id) {
  const { error } = await supabase.from("note").delete().eq("id", id);

  if (error) {
    toast.error("Could not delete note");
    throw new Error(error);
  }

  toast.success("Note deleted successfully");
}
//////////////////////////////////////////////////////////////////
export async function getDeletedNotes(userId) {
  const { data: notes, error } = await supabase
    .from("note")
    .select("*")
    .eq("userId", userId)
    .eq("deleted", true);

  if (error) {
    throw new Error(error);
  }

  return notes;
}

export async function updatePin(note) {
  console.log("DB", note);

  const { data, error } = await supabase
    .from("note")
    .update({
      pin: note?.pin,
    })
    .eq("id", note?.id)
    .select();

  if (error) {
    toast.error("Could not update note");
    throw new Error(error);
  }

  toast.success("Note updated successfully");
  return data[0];
}
export async function updateNoteAfterDelete(id) {
  const { data, error } = await supabase
    .from("note")
    .update({
      deleted: true,
    })
    .eq("id", id)
    .select("*");
 
  if (error) {
    toast.error("Could not update note");
    throw new Error(error);
  }
 
  toast.success("Note updated successfully");
  return data[0];
}
 