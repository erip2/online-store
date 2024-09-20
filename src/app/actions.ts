'use server';

export async function createNewsLetterEmail(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMY_JSON_API_URL}/http/200/Thank%20you%20for%20signing%20up!?delay=1000`
    );
    const data = await res.json();

    return {
      message: data.message,
    };
  } catch (error) {
    return { message: 'An error occurred' };
  }
}
