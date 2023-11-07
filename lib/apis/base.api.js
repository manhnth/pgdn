export const baseApi = {
  async get(url, params = "") {
    const res = await fetch(url, {});

    if (!res.ok) {
    }
  },

  async post(url, data = "") {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.headers.get("Content-Type")?.includes("application/json")) {
      return res.json();
    }

    return res.text();
  },
};
