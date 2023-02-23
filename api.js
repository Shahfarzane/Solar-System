async function connet() {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/solaris.json"
    );
    if (!response.ok) {
      throw new Error(`API loading failed :${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export { connet };
