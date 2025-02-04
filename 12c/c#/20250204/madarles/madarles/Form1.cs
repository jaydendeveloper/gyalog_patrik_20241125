using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace madarles
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            readFile();
        }

        List<string> birds = new List<string>();
        Dictionary<string, int> birdCountDict = new Dictionary<string, int>();

        void readFile()
        {
            birds.Clear();
            try
            {
                string[] lines = File.ReadAllLines("./madarles.txt");
                foreach (string line in lines)
                {
                    string[] words = line.Split(',');
                    foreach (var bird in words)
                    {
                        if(bird != "")
                        {
                            birds.Add(bird);
                            if (birdCountDict.ContainsKey(bird))
                            {
                                birdCountDict[bird]++;
                            }
                            else
                            {
                                birdCountDict.Add(bird, 1);
                            }
                            sortByCount();
                        }
                    }
                }
                updateCombobox();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        void writeFile()
        {
            File.WriteAllText("./madarles.txt", "");
            foreach (string bird in birds)
            {
                File.AppendAllText("./madarles.txt", bird + ",");
            }
        }

        private void addbtn_Click(object sender, EventArgs e)
        {
            readFile();
            birds.Add(textBox1.Text);
            writeFile();
            updateCombobox();
           if(birdCountDict.ContainsKey(textBox1.Text))
            {
                birdCountDict[textBox1.Text]++;
            }
            else
            {
                birdCountDict.Add(textBox1.Text, 1);
            }
           sortByCount();
        }

        void updateCombobox()
        {
            birdBox.Items.Clear();

            foreach (string bird in birds)
            {
                birdBox.Items.Add(bird);
            }
        }

        void sortByCount()
        {
            var sortedDict = birdCountDict.OrderBy(x => x.Value);
            for (int i = 0; i < sortedDict.Count(); i++)
            {
                switch (i)
                {
                    case 4:
                        radioButton1.Text = sortedDict.ElementAt(i).Key;
                        break;
                    case 3:
                        radioButton2.Text = sortedDict.ElementAt(i).Key;
                        break;
                    case 2:
                        radioButton3.Text = sortedDict.ElementAt(i).Key;
                        break;
                    case 1:
                        radioButton4.Text = sortedDict.ElementAt(i).Key;
                        break;
                }
            }
        }

        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {
            countLabel.Text = birdCountDict[radioButton1.Text].ToString();
        }

        private void radioButton2_CheckedChanged(object sender, EventArgs e)
        {
            countLabel.Text = birdCountDict[radioButton2.Text].ToString();
        }

        private void radioButton3_CheckedChanged(object sender, EventArgs e)
        {
            countLabel.Text = birdCountDict[radioButton3.Text].ToString();
        }

        private void radioButton4_CheckedChanged(object sender, EventArgs e)
        {
            countLabel.Text = birdCountDict[radioButton4.Text].ToString();
        }
    }
}
