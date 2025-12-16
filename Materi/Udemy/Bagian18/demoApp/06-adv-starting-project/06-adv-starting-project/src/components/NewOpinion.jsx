import { use } from 'react';
import { OpinionsContext } from "../store/opinions-context";
import { useActionState } from 'react';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext)

  async function shareOpinionAction(formData) {
    const userName = formData.get('userName')
    const title = formData.get('title')
    const body = formData.get('body')

    let errors = [];
    if (title.trim().length < 5) {
      errors.push('Title must be at least five character long.')
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push('Body must be between 10 and 300 character long.')
    }
    if (!userName.trim()) {
      errors.push('sialkan mengisi nama Anda');
    }
    if (errors.length > 0) {
      return {
        errors, title, body, userName
      }
    }
    await addOpinion({ title, body, userName });
    return { errors: null }
  }
  const [formState, setFormState] = useActionState(shareOpinionAction, { errors: null })
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action="opinionForm">
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
