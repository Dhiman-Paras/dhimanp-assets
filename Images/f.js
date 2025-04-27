export function getDummyData() {
  const allowedDomains = ["https://example.com", "https://yourproject.com"];
  const referrer = document.referrer;

  if (!allowedDomains.some(domain => referrer.startsWith(domain))) {
    console.error("Access denied: Invalid domain");
    return null;
  }

  return {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      zip: "10001",
    },
    hobbies: ["reading", "gaming", "traveling"],
  };
}
