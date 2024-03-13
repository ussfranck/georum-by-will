export async function fecthAllDocuments () {
  // 
};

export async function fecthAllSoftware() {
  // 
}

export async function fecthAllExtraData() {
  // 
}

export async function fecthAllRessourceFiles() {
  // 
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredRessouces(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
  } catch (reason) {
    console.error('Database Error:', reason);
    throw new Error('Failed to fetch documents.');
  }
}

export async function fetchRessoucesPages(query: string) {
  try {
  } catch (reason) {
    console.error('Database Error:', reason);
    throw new Error('Failed to fetch total number of ressources.');
  }
}

export async function fetchUserAppearAgenda() {
  try {
  } catch (reason) {
    console.error('Database Error:', reason);
    throw new Error('Failed to fetch all users appear agenda.');
  }
}

export async function getUserAgenda(email: string) {
  try {

  } catch (reason) {
    console.error('Failed to fetch user:', reason);
    throw new Error('Failed to fetch user.');
  }
}