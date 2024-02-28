#include <iostream>
#include <fstream>
#include <set>
using namespace std;
int main()
{
   multiset<string> M, M1, M2;
   multiset<string>::iterator i;
   ifstream fin("input.txt");
   while (!fin.eof())
   {
      string s;
      fin >> s;
      cout << s << endl;
      M.insert(s);
   }
   for (i = M.begin(); i != M.end(); i++)
   {
      string s = *i;
      if (isupper(s[0]))
         M1.insert(*i);
      else
         M2.insert(*i);
   }
   cout << "Malumotlar faylga saqlansinmi ? y/n" << endl;
   char c;
   cin >> c;
   if (c != 'y')
   {
      cout << "M1 to'plam elementlari:\n";
      for (i = M1.begin(); i != M1.end(); i++)
      {
         cout << *i << " ";
      }
      cout << "\nM2 to'plam elementlari:\n";
      for (i = M2.begin(); i != M2.end(); i++)
      {
         cout << *i << " ";
      }
   }
   else
   {
      ofstream fout("natija.txt");
      fout << "M1 to'plam elementlari:\n";
      for (i = M1.begin(); i != M1.end(); i++)
      {
         fout << *i << " ";
      }
      fout << "\nM2 to'plam elementlari:\n";
      for (i = M2.begin(); i != M2.end(); i++)
      {
         fout << *i << " ";
      }
      cout << "Ma'lumotlar natija.txt fayliga yuborildi!";
   }
}